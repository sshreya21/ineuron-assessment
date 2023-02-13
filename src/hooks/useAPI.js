import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import apiService from "../utils/apiService";
import { schema } from "../redux/schema";
import { getValue } from "../utils/commonUtils";

const useAPI = (type, options = {}) => {
  let apiSchema = schema[type];
  if (typeof apiSchema === "function") {
    apiSchema = apiSchema({});
  }

  const dispatch = useDispatch();

  const readProps = useSelector(
    (state) => state["applicationReducer"][apiSchema.props],
    shallowEqual
  );

  const readConfig = (dataOptions) => {
    return { ...options, ...dataOptions };
  };

  const readAPISchema = (dataOptions) => {
    const optionConfig = readConfig(dataOptions);
    let apiSchemaFunction = schema[type];
    if (typeof apiSchemaFunction === "function") {
      apiSchemaFunction = apiSchemaFunction(optionConfig);
    }
    return apiSchemaFunction;
  };

  const requestData = (dataOptions) => {
    const parsedSchema = readAPISchema(dataOptions);
    const optionConfig = readConfig(dataOptions);

    if (optionConfig.updateResult || optionConfig.refresh) {
      dispatch({
        type: type + "_PENDING",
        data: getValue(readProps, "readProps.data"),
        readProps: parsedSchema.props,
      });
    } else {
      dispatch({
        type: type + "_PENDING",
        data: optionConfig.initialData,
        readProps: parsedSchema.props,
      });
    }

    //API call
    apiService({
      url: parsedSchema.url,
      method: parsedSchema.method,
      data: optionConfig.payload,
    })
      .then((response) => {
        if (optionConfig.updateResult) {
          const updatedResult = optionConfig.updateResult(
            readProps,
            response.data
          );
          dispatch({
            type: type + "_SUCCESS",
            data: updatedResult,
            readProps: parsedSchema.props,
          });
        } else {
          dispatch({
            type: type + "_SUCCESS",
            data: getValue(response, "response.data.data"),
            readProps: parsedSchema.props,
          });

          optionConfig.onSuccess && optionConfig.onSuccess();
        }
      })
      .catch((error) => {
        dispatch({
          type: type + "_FAILURE",
          readProps: parsedSchema.props,
        });
      });
  };

  const fetchNext = (fetchNextOptions) => {
    requestData(fetchNextOptions);
  };

  const refresh = (refreshOptions) => {
    requestData({ ...refreshOptions, refresh: true });
  };

  useEffect(() => {
    if (!options.lazy) {
      requestData(options);
    }
  }, []);

  return [readProps, requestData, { fetchNext, refresh }];
};

export default useAPI;

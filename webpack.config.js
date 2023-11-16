module.exports = {
    
    module: {
      rules: [
        {
          test: /\.(json)$/i,
          rules: [
            {
              loader: "val-loader",
              options: {
                executableFile: path.resolve(
                  __dirname,
                  "fixtures",
                  "executableFile.js"
                ),
              },
            },
          ],
        },
        {
          test: /\.json$/i,
          type: "asset/resource",
        },
      ],
    },
  };
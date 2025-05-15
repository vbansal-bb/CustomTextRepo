
(function () {
  var fs = require("fs"),
    path = require("path"),
    projectRoot = process.env.INIT_CWD,
    customTextWidgetName = "AndroidTextCustom",
    customVirtualTextWidgetName = "AndroidVirtualTextCustom",
    rendererImplementationsPath = path.join(
      projectRoot,
      "node_modules",
      "react-native",
      "Libraries",
      "Renderer",
      "implementations"
    ),
    rendererDevArr = [
      path.join(rendererImplementationsPath, "ReactFabric-dev.fb.js"),
      path.join(rendererImplementationsPath, "ReactFabric-dev.js"),
      path.join(rendererImplementationsPath, "ReactNativeRenderer-dev.fb.js"),
      path.join(rendererImplementationsPath, "ReactNativeRenderer-dev.js"),
    ],
    rendererOtherArr = [
      path.join(rendererImplementationsPath, "ReactFabric-prod.fb.js"),
      path.join(rendererImplementationsPath, "ReactFabric-prod.js"),
      path.join(rendererImplementationsPath, "ReactFabric-profiling.fb.js"),
      path.join(rendererImplementationsPath, "ReactFabric-profiling.js"),
      path.join(rendererImplementationsPath, "ReactNativeRenderer-prod.fb.js"),
      path.join(rendererImplementationsPath, "ReactNativeRenderer-prod.js"),
      path.join(
        rendererImplementationsPath,
        "ReactNativeRenderer-profiling.fb.js"
      ),
      path.join(
        rendererImplementationsPath,
        "ReactNativeRenderer-profiling.js"
      ),
    ];

  console.log("Custom Text module cleanup hook execution started");

  if (fs.existsSync(rendererImplementationsPath)) {
    rendererDevArr.forEach(function (filePath) {
      var customTextWidgetCode =
          'type === "' + customTextWidgetName + '" || // Android\n\t\t',
        customVirtualTextWidgetCode =
          'type === "' + customVirtualTextWidgetName + '" || // Android\n\t\t';

      cleanupCustomTextWidget(
        filePath,
        customTextWidgetCode + customVirtualTextWidgetCode
      );
    });

    rendererOtherArr.forEach(function (filePath) {
      var customTextWidgetCode =
          '"' + customTextWidgetName + '" === JSCompiler_inline_result ||\n\t\t',
        customVirtualTextWidgetCode =
          '"' +
          customVirtualTextWidgetName +
          '" === JSCompiler_inline_result ||\n\t\t';

      cleanupCustomTextWidget(
        filePath,
        customTextWidgetCode + customVirtualTextWidgetCode
      );
    });
  }
  console.log("Custom Text module cleanup hook execution ended");

  function cleanupCustomTextWidget(filePath, widget) {
    if (fs.existsSync(filePath)) {
      var fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent.indexOf(customTextWidgetName) < 0) {
        return;
      }
      fileContent = fileContent.replace(widget, "");
      fs.writeFileSync(filePath, fileContent, "utf-8");
    }
  }
})();

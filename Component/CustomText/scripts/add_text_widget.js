#!/usr/bin/env node


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

  // To enable DLP within <Text \> UI component we need to extend default list of native views
  // with following views: AndroidTextCustom, AndroidVirtualTextCustom.
  // node_modules/react-native/Libraries/Renderer/implementations/* manages default native views for RN 0.70.x and higher

  if (fs.existsSync(rendererImplementationsPath)) {
    rendererDevArr.forEach(function (filePath) {
      var customTextWidgetCode =
          'type === "' + customTextWidgetName + '" || // Android\n\t\t',
        customVirtualTextWidgetCode =
          'type === "' + customVirtualTextWidgetName + '" || // Android\n\t\t';

      addCustomTextWidget(
        filePath,
        customTextWidgetCode + customVirtualTextWidgetCode,
        'type === "AndroidTextInput" || // Android'
      );
    });

    rendererOtherArr.forEach(function (filePath) {
      var customTextWidgetCode =
          '"' + customTextWidgetName + '" === JSCompiler_inline_result ||\n\t\t',
        customVirtualTextWidgetCode =
          '"' +
          customVirtualTextWidgetName +
          '" === JSCompiler_inline_result ||\n\t\t';

      addCustomTextWidget(
        filePath,
        customTextWidgetCode + customVirtualTextWidgetCode,
        '"AndroidTextInput" === JSCompiler_inline_result ||'
      );
    });
  }

  function addCustomTextWidget(filePath, widget, insertBefore) {
    if (fs.existsSync(filePath)) {
      var fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent.indexOf(customTextWidgetName) >= 0) {
        return;
      }
      fileContent = fileContent.replace(insertBefore, widget + insertBefore);
      fs.writeFileSync(filePath, fileContent, "utf-8");
    }
  }
})();

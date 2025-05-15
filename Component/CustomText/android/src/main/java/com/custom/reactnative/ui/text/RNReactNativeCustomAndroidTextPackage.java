
package com.custom.reactnative.ui.text;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;
import com.custom.reactnative.ui.text.ReactTextViewManager;
import com.custom.reactnative.ui.text.ReactVirtualTextViewManager;

public class RNReactNativeCustomAndroidTextPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
      return Collections.emptyList();
    }

    // Deprecated from RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
      return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
      List<ViewManager> viewManagers = new ArrayList<>();

      viewManagers.add(new ReactTextViewManager());
      viewManagers.add(new ReactVirtualTextViewManager());

      return viewManagers;
    }
}
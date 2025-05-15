

package com.custom.reactnative.ui.text;

import android.view.View;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.text.ReactVirtualTextShadowNode;

/**
 * Manages raw text nodes. Since they are used only as a virtual nodes any type of native view
 * operation will throw an {@link IllegalStateException}
 */
@ReactModule(name = ReactVirtualTextViewManager.REACT_CLASS)
public class ReactVirtualTextViewManager extends BaseViewManager<View, ReactVirtualTextShadowNode> {

  @VisibleForTesting
  public static final String REACT_CLASS = "AndroidVirtualTextCustom";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public View createViewInstance(ThemedReactContext context) {
    throw new IllegalStateException("Attempt to create a native view for AndroidVirtualTextCustom");
  }

  @Override
  public void updateExtraData(View view, Object extraData) {}

  @Override
  public Class<ReactVirtualTextShadowNode> getShadowNodeClass() {
    return ReactVirtualTextShadowNode.class;
  }

  @Override
  public ReactVirtualTextShadowNode createShadowNodeInstance() {
    return new ReactVirtualTextShadowNode();
  }
}

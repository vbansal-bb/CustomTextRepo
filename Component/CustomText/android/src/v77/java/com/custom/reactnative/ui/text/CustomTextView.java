



package com.custom.reactnative.ui.text;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.util.SparseArray;
import android.view.DragEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.autofill.AutofillValue;
import android.view.textclassifier.TextClassifier;
import android.widget.TextView;


/** Replacement for native widget class.
 * 
 * This class is a replacement for the native <tt>android.widget.TextView</tt>
 * class.  must utilize this class instead of
 * the native class in order to enable secure cut-copy-paste operations.
 * Note: Full Code of this class is not written as this is justa  reproducer of issue
 */
public class CustomTextView extends TextView {


    public CustomTextView(final Context context) {
        super(context);
        CustomViewSetup();
    }

    public CustomTextView(final Context context,
                      final AttributeSet attrs) {
        super(context, attrs);
        CustomViewSetup();
    }

    public CustomTextView(final Context context,
                      final AttributeSet attrs,
                      final int defStyle) {
        super(context, attrs, defStyle);

        CustomViewSetup();

    }

    public CustomTextView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);

        CustomViewSetup();
    }

    private void setPrivateLongClickListenerImpl(OnLongClickListener l) {
        super.setOnLongClickListener(l);
    }

    private void CustomViewSetup() {

        // This allows Android Studio to show the widget in the layout preview
        if (isInEditMode()) {
            return;
        }

    }

    @Override
    public boolean onTextContextMenuItem(final int id) {

        return false;
    }

    
    @Override
    public void setTextIsSelectable(boolean selectable) {
      
        super.setTextIsSelectable(selectable);
    
    }

    @Override
    protected void onVisibilityChanged(View changedView, int visibility) {
        super.onVisibilityChanged(changedView, visibility);

      
    }

    @Override
    public boolean onDragEvent(DragEvent event) {

        return super.onDragEvent(event);
    }

   
    @Override
    @SuppressLint("ClickableViewAccessibility")
    public boolean onTouchEvent(MotionEvent event) {
    
        return super.onTouchEvent(event);
    }


    @Override
    public void setOnLongClickListener(OnLongClickListener l) {

    }

   
    @Override
    final public int getAutofillType() {
        // GD Widgets do not support AutoFill services
        return AUTOFILL_TYPE_NONE;
    }

    @Override
    final public AutofillValue getAutofillValue() {
 
        return null;
    }

    @Override
    final public void autofill(AutofillValue value) {
        //Do nothing
    }

    @Override
    final public void autofill(SparseArray<AutofillValue> values) {
        //Do nothing
    }

    @Override
    final public int getImportantForAutofill() {
        // Widgets are not important for AutoFill services
        return IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS;
    }

    @Override
    final public TextClassifier getTextClassifier() {

        return super.getTextClassifier();

    }

    @Override
    final public void setTextClassifier(TextClassifier textClassifier) {
        super.setTextClassifier(textClassifier);
    }
}

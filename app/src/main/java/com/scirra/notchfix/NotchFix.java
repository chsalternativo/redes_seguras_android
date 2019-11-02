package com.scirra.notchfix;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import android.os.Build;
import android.view.Window;
import android.view.WindowManager;


public class NotchFix extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // in threory only works on Android Pie and above, so we have to check the version
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            Window window = cordova.getActivity().getWindow();
            WindowManager.LayoutParams attributes = window.getAttributes();
            attributes.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            window.setAttributes(attributes);
        }
    }
}
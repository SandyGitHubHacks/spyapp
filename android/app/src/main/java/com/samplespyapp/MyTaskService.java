package com.samplespyapp;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;
import com.facebook.react.bridge.WritableMap;
import android.content.Context;


public class MyTaskService extends HeadlessJsTaskService {

    // public static void startService(Context context) {
    //     //if (!AppDetector.isAppInForeground(context)) {
    //         Intent intentService = new Intent(context, MyTaskService.class);
    //         context.startService(intentService);
    //     //    HeadlessJsTaskService.acquireWakeLockNow(context);
    //     //}
    // }

  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
    if (extras != null) {
      return new HeadlessJsTaskConfig(
          "task",
          data,
          5000, // timeout for the task
          true // optional: defines whether or not  the task is allowed in foreground. Default is false
        );
    }
    return null;
  }
}
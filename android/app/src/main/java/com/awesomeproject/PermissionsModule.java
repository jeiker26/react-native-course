// PermissionsModule.java
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.Manifest;
import android.content.pm.PackageManager;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class PermissionsModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    PermissionsModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "PermissionsModule";
    }

    @ReactMethod
    public void requestCameraPermission() {
        if (ContextCompat.checkSelfPermission(reactContext, Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(reactContext.getCurrentActivity(),
                    new String[]{Manifest.permission.CAMERA},
                    1);
        }
    }
}

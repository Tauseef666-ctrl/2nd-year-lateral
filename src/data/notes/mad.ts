import type { ChapterNote } from '../../types';

export const MAD_NOTES: ChapterNote[] = [
  {
    moduleId: 'mad-m1',
    title: 'Module 1 · Introduction to Android',
    sections: [
      {
        h: '1.1 Android Platform & SDK Setup',
        items: [
          '**Android** = open-source mobile OS (Linux-kernel based) by Google; powers phones, tablets, TVs, wearables and embedded systems.',
          '**Android software stack** (bottom→top): Linux kernel → (Hardware Abstraction Layer) → Native libraries (SQLite, SSL, WebKit) + Android Runtime (ART) → Application Framework (Activity Manager, Content Providers, Resource Manager, etc.) → Applications.',
          '**ART vs Dalvik**: modern devices run ART (AOT + JIT); earlier used Dalvik VM with .dex bytecode; APK bundles `classes.dex` + resources + manifest + native libs.',
          '**SDK setup**: install JDK → Android Studio → SDK Manager (platforms, build-tools) → create AVD/emulator; Gradle builds and manages dependencies (`build.gradle`).',
          '**Key components** (four): **Activity**, **Service**, **Broadcast Receiver**, **Content Provider** — each an entry point declared in the manifest.',
        ],
      },
      {
        h: '1.2 Anatomy of an App & Manifest',
        items: [
          '**Project anatomy**: `AndroidManifest.xml` (declarations/permissions), `src/` (Java/Kotlin), `res/` (layout xml, drawables, values/strings, mipmap icons), `build.gradle`, `gradle.properties`, `R.java` (auto-generated resource index).',
          '**Manifest** declares: package name, components (`<activity>`, `<service>`, `<receiver>`, `<provider>`), permissions (`<uses-permission>`), app icon/label, intent filters (`MAIN`/`LAUNCHER`), min/target SDK.',
          '**R class / resources**: reference via `R.layout.activity_main`, `R.string.app_name`; resources decouple UI text/icons from code (localisation, theming).',
          '**Build types**: debug/release; APK vs AAB (App Bundle for Play); signing with keystore.',
          '**App lifecycle basics**: processes are killed by the system under memory pressure — state must be saved/restored.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the Android software architecture stack and explain each layer.',
          'What is the role of AndroidManifest.xml? List its elements.',
          'Name and explain the four Android application components.',
          'How is an APK built? Explain the R class.',
          'Explain ART, .dex and why Android is called open source.',
        ],
      },
    ],
  },
  {
    moduleId: 'mad-m2',
    title: 'Module 2 · Application Design Essentials',
    sections: [
      {
        h: '2.1 Activities, Services & Application Context',
        items: [
          '**Activity** = single screen with a UI; managed by a **lifecycle**: onCreate → onStart → onResume → (running) → onPause → onStop → onDestroy; process death handled via onSaveInstanceState.',
          '**Intents launch activities**: explicit (by class) vs implicit (by action/data, resolved by system).',
          '**Service** = long-running background component (no UI): Started (startService/stopService) and **Bound** (bindService/unbindService); runs on **main thread** — use threads/work manager for heavy tasks.',
          '**Application context** = app-wide singleton (`getApplicationContext()`) with app-level resources and global state in an `Application` subclass.',
          '**Activity stack / task**: back stack semantics, launch modes (standard, singleTop, singleTask, singleInstance), `onBackPressed`/`Up` navigation.',
        ],
      },
      {
        h: '2.2 Intents, Broadcast Receivers & Permissions',
        items: [
          '**Intent object**: `ComponentName`, Action, Data (URI), Type, Extras (putExtra/getStringExtra), Flags; **Intent Filters** in manifest match implicit intents (ACTION_VIEW, ACTION_SEND).',
          '**Broadcast Receiver** = component reacting to system/app broadcasts: manifest-declared (static) vs context-registered (dynamic); sendBroadcast, ordered/abortable broadcasts; `setResultData`; receiver runs on main thread.',
          'Common broadcasts: ACTION_BOOT_COMPLETED, BATTERY_LOW, SCREEN_ON, network state; **Android 8+ limits implicit broadcast registration in manifest**.',
          '**Permissions**: normal vs dangerous; runtime requests (`requestPermissions`) since API 23; `READ_CONTACTS`, `ACCESS_FINE_LOCATION`, `CAMERA` examples; permission groups.',
          '**Contexts**: Activity context vs Application context — which to use for UI vs singleton services.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the Activity lifecycle with the seven methods and a diagram.',
          'Distinguish started vs bound service.',
          'Write the steps to send and receive a broadcast.',
          'What are implicit and explicit intents? Give examples.',
          'How are dangerous permissions requested at runtime?',
        ],
      },
    ],
  },
  {
    moduleId: 'mad-m3',
    title: 'Module 3 · User Interface Design',
    sections: [
      {
        h: '3.1 Layouts, Screen Elements & UI Components',
        items: [
          '**Layouts**: LinearLayout (orientation, weights), RelativeLayout (anchor edges), FrameLayout (stacking), ConstraintLayout (modern, flat hierarchy, percent constraints), TableLayout, GridLayout.',
          '**Views vs ViewGroups**: View = atomic UI element; ViewGroup = container managing children.',
          '**Core widgets**: TextView, EditText, Button, ImageButton, ImageView, CheckBox, RadioButton/RadioGroup, Spinner (dropdown), ListView/RecyclerView (lists), Switch, SeekBar, WebView.',
          '**RecyclerView** — efficient, view-holder-reusing list with LayoutManager + Adapter + ViewHolder pattern (vs deprecated ListView).',
          'XML layout attributes: `android:layout_width/height=match_parent|wrap_content|dp`, gravity/padding/margin, `sp` for text; inflate via `setContentView(R.layout...)`.',
        ],
      },
      {
        h: '3.2 Drawing & Working with Animation',
        items: [
          '**Custom drawing**: extend `View` and override `onDraw()` with `Canvas` (drawLine, drawRect, drawCircle, drawPath) and `Paint` (color, style, strokeWidth, anti-alias).',
          '**Canvas transformations**: translate, rotate, scale, save/restore.',
          '**Animation types**: **View Animation** (Tween: translate/scale/rotate/alpha via XML animations), **Property Animation** (Animator: ObjectAnimator/ValueAnimator animates any property), and **Drawable Animation** (frame-by-frame) for image sequences.',
          '`AnimatedVectorDrawable`, `LayoutTransition`, CardView shapes; hardware acceleration notes.',
          'Event handling on views: `setOnClickListener`, touch events (ACTION_DOWN/MOVE/UP), gesture detectors.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare LinearLayout, RelativeLayout and ConstraintLayout with XML snippets.',
          'Explain the RecyclerView adapter pattern.',
          'Write a custom View program drawing a shape in onDraw.',
          'Distinguish Tween vs Property vs Frame animation with examples.',
          'How do you respond to user clicks and touch gestures?',
        ],
      },
    ],
  },
  {
    moduleId: 'mad-m4',
    title: 'Module 4 · Testing, Publishing, Preferences & Resources',
    sections: [
      {
        h: '4.1 Testing & Publishing',
        items: [
          '**Testing**: unit tests (JUnit, `test/` sourceset), instrumentation/UI tests (Espresso, `androidTest/`), manual testing on emulator/device, connection testing via ADB; `androidTestImplementation` dependencies.',
          '**Debugging**: Logcat (`Log.d/e/w`), breakpoints, Android Profiler (CPU/memory/network).',
          '**Publishing**: generate a **signed APK/AAB** with a keystore (debug vs release); Google Play app signing; versionCode (int, must increase) vs versionName (display string).',
          '**Play Console**: create app → upload AAB → content rating → data safety → target audience → rollout (internal/closed/open/alpha-beta tracks) → review.',
          '**Monetisation basics**: Google Play billing, ads via AdMob; IAP validation on backend.',
        ],
      },
      {
        h: '4.2 Preferences & Resource Management',
        items: [
          '**SharedPreferences** — lightweight key-value store (XML) via `getSharedPreferences(name, MODE_PRIVATE)`; `edit()` → putString/putInt → apply()/commit(); used for user settings/session.',
          '**Resource types**: animation, color, drawable, layout, mipmap (launcher icons), string (with placeholders/plurals), style/theme, dimension, raw, xml; quantity plurals and string arrays (`arrays.xml`).',
          '**Resource qualifiers** (folders): `values-en`, `drawable-xxhdpi`, `layout-land`, `values-night` (dark theme) — system picks best match by configuration; adaptive icons via `mipmap-anydpi-v26`.',
          '**AndroidManifest references resources** (`@string/`, `@mipmap/`, `@style/`); `values-night`/themes for dark mode.',
          '**DPI buckets**: ldpi/mdpi/hdpi/xhdpi/xxhdpi/xxxhdpi (~120/160/240/320/480/640 dpi); density = pixel ratio mentioned in dp.', 
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write the steps to sign and publish an Android app on Play Store.',
          'Explain versionCode vs versionName.',
          'How do you save a setting with SharedPreferences?',
          'List resource qualifiers and give an example of each.',
          'What is the difference between dp and sp?',
        ],
      },
    ],
  },
  {
    moduleId: 'mad-m5',
    title: 'Module 5 · Common Android APIs',
    sections: [
      {
        h: '5.1 Data & Storage APIs: SQLite & Content Providers',
        items: [
          '**Storage options**: SharedPreferences, internal files (`openFileOutput`), external storage (app-specific + shared), SQLite, Room (modern ORM over SQLite), Network/cloud.',
          '**SQLite** — embedded relational DB (`SQLiteOpenHelper`/`SQLiteDatabase`); CRUD via `execSQL`, `rawQuery`, `insert/update/delete`; transactions and `ContentValues`; stored at `data/data/<pkg>/databases/`.',
          '**Contents & contract**: often define a `Contract` class with table/column constants.',
          '**ContentProvider** — central component exposing data to other apps via a `content://` URI with CRUD methods (query/insert/update/delete + getType); `ContentResolver` performs the operations from the client side.',
          '**CursorLoader / content observer**; permissions on provider (`android:readPermission`).',
        ],
      },
      {
        h: '5.2 Networking, Web & Telephony APIs',
        items: [
          '**Networking**: `HttpURLConnection` / OkHttp / Retrofit (REST clients); parse JSON with org.json / Gson / Moshi; `Volley` for image + request queues; must not block main thread — use coroutines/AsyncTask (deprecated)/Executor.',
          '**INTERNET permission** required (`android.permission.INTERNET`); cleartext traffic blocked by default (Android 9+) — use `networkSecurityConfig` or https.',
          '**WebView**: embed web content, `WebSettings`, `setJavaScriptEnabled`, WebViewClient/WebChromeClient, loadUrl/loadHtml.',
          '**Telephony APIs**: `TelephonyManager` — device info, SIM info, operator name, cellular network info; read permissions (READ_PHONE_STATE); SMS manager (SmsManager) — sendSmsTextMessage, permission READ_SMS/SEND_SMS; location via `LocationManager`/FusedLocation (ACCESS_FINE_LOCATION).',
          '**Wifi APIs**: `WifiManager` for Wi-Fi scanning and connection info.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain SQLiteOpenHelper with a create-and-query example.',
          'What is a ContentProvider and how are CRUD operations performed?',
          'How do you fetch JSON from a REST API in Android safely?',
          'Write code to send an SMS and to obtain device location.',
          'Compare internal vs external storage with use cases.',
        ],
      },
    ],
  },
];
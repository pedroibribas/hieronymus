// Module for dist entry point.
import("./app/app")
    .then(m => m.App.init());

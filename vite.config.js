import {defineConfig, loadEnv} from "vite"


//This code defines a configuration file for the Vite build tool using the defineConfig() function provided by Vite.
//
// The function takes an object with three properties: command, mode, and ssrBuild. These properties represent
// the current build environment and are automatically set by Vite during the build process.

// export default defineConfig(({command, mode, ssrBuild}) => {
//     console.log(command, mode, ssrBuild)
//     return {}
// });

// export default defineConfig(({command, mode}) => {
//     const env = loadEnv(mode, process.cwd(), "VITE_");
//
//     console.log(command, mode)
//     console.log(env)
//     return {}
// });
//The configuration object has several properties that customize the behavior of the Vite build tool. Here's what each property does:
//
// clearScreen: A boolean value that determines whether to clear the console
// output before each build or not. Setting it to false will keep the console output from previous builds.

// envPrefix: A string that represents the prefix for environment variables used in the build process.
// For example, if envPrefix is set to "APP_", environment variables like APP_NAME or APP_VERSION will be used.

// logLevel: A string that sets the logging level for the Vite build tool.
// The available options are "silent", "error", "warn", "info", "debug", and "trace".

// server: An object that configures the built-in development server provided by Vite.
// The open property specifies which file to open in the browser when the server starts,
// and the port property sets the server port to use. The strictPort property is a boolean that,
// when set to true, will fail the server startup if the specified port is already in use.

// preview: An object that configures the preview server provided by Vite.
// This server is used to preview the built project in a browser.
// The port property sets the preview server port to use, and the strictPort property is a boolean that,
// when set to true, will fail the server startup if the specified port is already in use.

export default defineConfig({
    clearScreen:false,
    envPrefix: "APP_",
    logLevel: "info",
    // envDir: "direnv",
    server:{
        open: "index.html",
        port:3000,
        //strictPort: true
    },
    preview:{
        port:8080,
        strictPort:true
    }

});


//Example of how to use an async
// export default defineConfig( async ({command, mode}) => {
//     const data = await someAsyncFunction();
//
//     return {
//
//     }
// });
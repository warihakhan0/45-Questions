function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("The size of shirt is ".concat(size, ", and it has a message ").concat(message));
}
make_shirts();
make_shirts("small", "I Love Pyhton");
make_shirts("Medium", "I Love SQL");

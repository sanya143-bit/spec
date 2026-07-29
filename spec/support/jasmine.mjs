export default {
    spec_dir: "01-jasmine-tests-passing",
    spec_files: [
        "**/*.js"
    ],
    helpers: [],
    env: {
        stopSpecOnExpectationFailure: false,
        random: true,
        forbidDuplicateNames: true
    }
}
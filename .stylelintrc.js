module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard'], // 'stylelint-config-prettier'
  rules: {
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["deep"],
    }],
    "no-descending-specificity": null,
    "no-empty-source": null,
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
    "no-missing-end-of-source-newline": null,  
    
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};

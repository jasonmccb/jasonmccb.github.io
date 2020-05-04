:: There is no quotation mark while setting Windows environment variable
set ALGOLIA_API_KEY=41bcf7f1cd2f499e9908d0a22fe2a75e
:: Change Code Page in command prompt to UTF-8
chcp 65001
:: Wait for the finish of pushing to Algolia 
start /WAIT bundle exec jekyll algolia
:: Change Code Page in command prompt back to ANSI Chinese GB2312
chcp 936
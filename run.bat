D:
cd D:\JekyllBlog\myblog
call push_to_Algolia.bat	REM Must use "call" otherwise sub bat won't come back
::TCP   127.0.0.1:4000    0.0.0.0:0    LISTENING   5740  [FoxitProtect.exe]
sc stop FxService
jekyll server
::bundle exec jekyll serve --watch
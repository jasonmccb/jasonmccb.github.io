D:
cd D:\JekyllBlog\myblog
call push_to_Algolia.bat	REM Must use "call" otherwise sub bat won't come back
jekyll server
::bundle exec jekyll serve --watch
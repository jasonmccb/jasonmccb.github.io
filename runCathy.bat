xcopy /E /I /Y D:\JekyllBlog\myblog\_site\Cathy D:\JekyllBlog\Cathy
xcopy /E /I /Y D:\JekyllBlog\myblog\_site\assets\main.css D:\JekyllBlog\main.css

start bundle exec jekyll serve

ping -n 11 127.0.0.1 > nul
d:
cd D:\JekyllBlog\myblog\_site
git checkout Cathy/index.html  assets/main.css
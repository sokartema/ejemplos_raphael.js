desc "Run server with rackup"
task :default => :rack

desc "Run server with sinatra"
task :init do
  sh "ruby chat.rb"
end

desc "Run server with rackup"
task :rack do
  sh "rackup"
end

desc "Deploy on heroku"
task :deploy do
  sh "git push heroku heroku:master"
end

#!/usr/bin/env ruby
# encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'

array = ["yellow","orange","red","purple","blue","turquoise","green"]

set :environment , :development

get '/' do

  @title = "Index"

  @color = array[rand(array.size)]

  haml :index

end

get '/ejemplos/:ejemplo' do

  ejemplo = params[:ejemplo]

  @color = array[rand(array.size)]

  case ejemplo

  when "ejemplo1"

    @title = "Ejemplo1"

    haml :ejemplo1
  else

    @title = "Error"

    haml :error

  end
end

get '/help' do

  @title = "Help"

  @color = array[rand(array.size)]


  haml :help

end

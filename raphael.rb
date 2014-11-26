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
  when "ejemplo2"

    @title = "Ejemplo2"

    haml :ejemplo2

  when "ejemplo3"

    @title = "Ejemplo3"

    haml :ejemplo3
  when "ejemplo4"

    @title = "Ejemplo4"

    haml :ejemplo4
  when "ejemplo5"

    @title = "Ejemplo5"

    haml :ejemplo5

  when "ejemplo6"

    @title = "Ejemplo6"

    haml :ejemplo6

  when "ejemplo7"

    @title = "Ejemplo7"

    haml :ejemplo7

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

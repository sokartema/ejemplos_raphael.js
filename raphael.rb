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

class BlogsController < ApplicationController

    def index
       # @blogs = Blog.all
       respond_to do |format|
        format.html
        format.json { render json: BlogDatatable.new(params) }
      end
    end 
end

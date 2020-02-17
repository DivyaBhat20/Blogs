class BlogDatatable < AjaxDatatablesRails::ActiveRecord



  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
       title: { source: "Blog.title"  },
       published: { source: "Blog.published"}
    }
  end

  def data
    records.map do |record|
      {
        # example:
        title: record.title,
         published: record.published
        
      }
    end
  end

  def get_raw_records
    # insert query here
    Blog.all
  end


end

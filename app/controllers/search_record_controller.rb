require 'net/http'

class SearchRecordController < ApplicationController
  before_action :authenticate_user!



  def putRecord

    val = params[:search_string]
    @is_error = false
    data = getArtistDetails(val)
    if( data == "something went wrong" or data == "search not found")
      @is_error = true
      @error = data
    else

      artist_info = data['artist']
      validateParsedDetailsAndSet(artist_info , val)
      Srecord.create(:user_id => current_user.id , :search_string => val , :artistimage => @artist_pic ,:artistprofile => @artist_link)

    end

  end


  def getRecord
    #response should be in
    index = 0
    @records = Srecord.where(:user_id => current_user.id)

  end


  def validateParsedDetailsAndSet(artist_info , val)

    begin
      @artist_name = artist_info['name']
    rescue StandardError
      @artist_name = 'ERROR PARSING NAME'
    end

    begin
      @artist_pic = artist_info['image'][3]['#text']
    rescue StandardError
      @artist_pic = ''
    end

    begin
      @artist_link = artist_info['url']
    rescue StandardError
      @artist_link = ''
    end

    begin
      @similar_artists = artist_info['similar']['artist']
      if(@similar_artists.kind_of?(Hash))
        @similar_artists = [@similar_artists]
      end

    rescue StandardError
      @similar_artists = []
    end

    begin
      @tags = artist_info['tags']['tag']
      if(@tags.kind_of?(Hash))
        @tags = [@tags]
      end
    rescue StandardError
      @tags = []
    end

    data = getAlbums(val)
    begin
      @albums_info = data['topalbums']['album']
      if(@albums_info.kind_of?(Hash))
        @albums_info = [@albums_info]
      end
    rescue StandardError
      @albums_info = []
    end

  end


  def getAlbums(artist)

    url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+artist+'&api_key='+Rails.application.secrets.last_fm_api_key+'&format=json'

    resp = Net::HTTP.get_response(URI.parse(url)) # get_response takes an URI object
    return JSON.parse(resp.body)


  end

  def getArtistDetails(artist)

    url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+artist+'&api_key='+Rails.application.secrets.last_fm_api_key+'&format=json'
    begin
      resp = Net::HTTP.get_response(URI.parse(url)) # get_response takes an URI object
    rescue StandardError
      return "something went wrong"
    end
    data = JSON.parse(resp.body)
    if(data.has_key? 'error')
      return "search not found"
    else
      return data
    end
  end

end

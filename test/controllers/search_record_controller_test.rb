require 'test_helper'

class SearchRecordControllerTest < ActionController::TestCase
  test "should get putRecord" do
    get :putRecord
    assert_response :success
  end

  test "should get getRecord" do
    get :getRecord
    assert_response :success
  end

end

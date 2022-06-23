require "test_helper"

class GremlinsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gremlin = gremlins(:one)
  end

  test "should get index" do
    get gremlins_url, as: :json
    assert_response :success
  end

  test "should create gremlin" do
    assert_difference('Gremlin.count') do
      post gremlins_url, params: { gremlin: { color: @gremlin.color, earType: @gremlin.earType, eyeColor: @gremlin.eyeColor, hunger: @gremlin.hunger, name: @gremlin.name, satisfaction: @gremlin.satisfaction, species: @gremlin.species, tailType: @gremlin.tailType } }, as: :json
    end

    assert_response 201
  end

  test "should show gremlin" do
    get gremlin_url(@gremlin), as: :json
    assert_response :success
  end

  test "should update gremlin" do
    patch gremlin_url(@gremlin), params: { gremlin: { color: @gremlin.color, earType: @gremlin.earType, eyeColor: @gremlin.eyeColor, hunger: @gremlin.hunger, name: @gremlin.name, satisfaction: @gremlin.satisfaction, species: @gremlin.species, tailType: @gremlin.tailType } }, as: :json
    assert_response 200
  end

  test "should destroy gremlin" do
    assert_difference('Gremlin.count', -1) do
      delete gremlin_url(@gremlin), as: :json
    end

    assert_response 204
  end
end

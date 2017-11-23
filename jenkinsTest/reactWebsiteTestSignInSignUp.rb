require "selenium-webdriver"
require "test/unit"
 
class LoginClass < Test::Unit::TestCase
 
  def setup  
    @driver = Selenium::WebDriver.for :firefox
    @driver.get('http://localhost:3000')
    @driver.manage.window.maximize  
  end
 
 
  def teardown
    @driver.quit
  end
 
 
  def test_login
    @driver.find_element(:name, "signin").click
    @driver.find_element(:name, "username").send_keys "sam@gmail.com"
    @driver.find_element(:name, "password").send_keys "sam"
    @driver.find_element(:name, "submit").click
    sleep 0.3
    assert(@driver.find_element(:id => "hello").text.include?("Hello"),"Assertion Failed")
    @driver.find_element(:name, "logout").click
  end
end
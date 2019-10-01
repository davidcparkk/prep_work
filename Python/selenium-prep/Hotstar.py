from selenium import webdriver

driver = webdriver.Chrome("/home/david/Documents/prep_work/Python/selenium-prep/chromedriver")

driver.get("https://hotstar.com")

# driver.find_element_by_id("searchField").send_keys("Movies")
# driver.find_element_by_name("q").send_keys("selenium")
# driver.find_element_by_name("btnK").click()
# driver.find_element_by_link_text("Premium").click()

# driver.find_element_by_css_selector("#searchField").send_keys("Sports")

# driver.find_element_by_partial_link_text("Prem").click()

# driver.find_element_by_xpath("//div"[])
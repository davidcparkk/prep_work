from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome("/home/david/Documents/prep_work/Python/selenium-prep/chromedriver")

driver.set_page_load_timeout(10)
driver.get("http://google.com")
driver.find_element_by_name("q").send_keys("Automation step by step")
driver.find_element_by_name("btnK").send_keys(Keys.ENTER)
driver.maximize_window()
driver.refresh()

print("success")

time.sleep(4)

driver.quit()
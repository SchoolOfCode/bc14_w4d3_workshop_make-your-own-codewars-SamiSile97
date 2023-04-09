//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { pizzaToCmSq } from "./main.js"

test("When 10 inch pizza is converted to cm^2", () => {
    expect(pizzaToCmSq(10)).toBeCloseTo(506.7, 1)
 })

test("When 14 inch pizza is converted to cm^2", () => {
    expect(pizzaToCmSq(14)).toBeCloseTo(993.1, 1)
 })
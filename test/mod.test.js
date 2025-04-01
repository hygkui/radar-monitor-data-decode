import fs from 'fs'
import path from 'path'
const file2 = path.join(__dirname, '2.json')
const file4 = path.join(__dirname, '4.json')

const raw_data_2 = require(file2)
const raw_data_4 = require(file4)

import { expect, test } from 'vitest'
import { decodeMonitorData } from '../mod.ts'

test('adds 1 + 2 to equal 3', () => {
  // expect(Math.sum(1, 2)).toBe(3)
  expect(decodeMonitorData).toBeDefined()
})

test('read file sendtime', () => {
  expect(raw_data_2.send_time).toEqual('2025-03-31 10:44:38')
  expect(raw_data_4.send_time).toEqual('2024-12-17 13:00:00')
})

test('read radar no', () => {
 
})
test('parse and decode', () => {
  expect(raw_data_2.data.length).toEqual(1)
  expect(raw_data_2.data[0].monitor_data).toBeDefined()


  const radar_no_2 = raw_data_2.data[0].radar_no
  const radar_no_4 = raw_data_4.data[0].radar_no
  expect(radar_no_2).toEqual("65232501956801000002")
  expect(radar_no_4).toEqual("65232501956801000004")


  const monitor_data_2  =  raw_data_2.data[0].monitor_data
  const monitor_data_4  =  raw_data_4.data[0].monitor_data
  const index_data_arr_2 = decodeMonitorData(monitor_data_2)
  const index_data_arr_4 = decodeMonitorData(monitor_data_4)

  expect(index_data_arr_2.length).toEqual(207234)
  expect(index_data_arr_4.length).toEqual(4412220)
})
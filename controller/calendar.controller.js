const { response, request } = require("express");

const createEvent = (
  req = request,
  res = response,
  next = (request.next = request.next)
) => {};
const getEvents = (req = request, res = response, next = request.next) => {};
const getEventById = (req = request, res = response, next = request.next) => {};
const updateEvent = (req = request, res = response, next = request.next) => {};
const deleteEvent = (req = request, res = response, next = request.next) => {};

module.exports = {};

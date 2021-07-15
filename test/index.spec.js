/* eslint-env mocha */
'use strict';

const expect = require('chai').expect;

const RdkafkaPrometheus = require('..');

describe('RdkafkaPrometheus', () => {
	describe('metrics', () => {
		it('indexes metrics by name', () => {
			const rdkafkaPrometheus = new RdkafkaPrometheus({});
			Object.keys(rdkafkaPrometheus.metrics).forEach((metricKey) => {
				expect(rdkafkaPrometheus.metrics[metricKey].name).to.be.equal(`rdkafka_${metricKey.toLowerCase()}`);
			});
		});
	});
});

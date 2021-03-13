#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkFizzbuzzStack } from '../lib/cdk-fizzbuzz-stack';

const app = new cdk.App();
new CdkFizzbuzzStack(app, 'CdkFizzbuzzStack');

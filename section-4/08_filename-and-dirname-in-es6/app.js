//Native Modules or Core Modules (present in core of node, not in node_modules)
import fs from "node:fs";
import net from "node:net";
import dgram from "node:dgram";
import http from "node:http";
import https from "node:https";
import child_process from "node:child_process";
import cluster from "node:cluster";
import zlib from "node:zlib";
import worker_threads from "node:worker_threads";
import crypto from "node:crypto";

//User Modules
import { num } from "./math.js";

//NPM Modules (need to do npm i)
import axios from "axios";

import React from 'react';

import { JsonTree } from './JsonTree';

export default {
  title: 'Components/Layout/Tree/Json',
  components: JsonTree,
  argTypes: {
    showEmpty: {
      control: 'boolean'
    },
    showCount: {
      control: 'boolean'
    }
  }
};

export const Simple = props => (
  <JsonTree
    {...props}
    data={{
      name: 'John Doe',
      age: 30,
      over21: true,
      children: [
        { name: 'Jane Doe', age: 25 },
        { name: 'Jim Doe', age: 33 }
      ]
    }}
  />
);

export const Expanded = props => (
  <JsonTree
    {...props}
    data={{
      name: 'John Doe',
      age: 30,
      over21: true,
      children: [
        { name: 'Jane Doe', age: 25 },
        { name: 'Jim Doe', age: 33 }
      ],
      extra: {
        key: 'value'
      }
    }}
    expandDepth={Infinity}
  />
);

export const Complex = props => (
  <JsonTree
    {...props}
    data={{
      in_bytes: 0,
      sensor_id: 'staging-alpha-network-sensor',
      uid: 'a3731aac-5687-408a-8ed6-7693f360d491',
      description: `Haxx0r ipsum mailbomb while void ssh leet deadlock over clock mega frack ack. Rsa I'm sorry Dave, I'm afraid I can't do that fopen ban eof. Recursively irc less ascii case d00dz shell emacs cd foad script kiddies gcc unix rm -rf rsa linux grep throw Leslie Lamport snarf. Lib function xss man pages packet sniffer root for continue exception ddos headers *.* protocol chown injection Dennis Ritchie thread January 1, 1970. If hack the mainframe echo race condition packet giga gurfle semaphore long python mainframe server. Tera salt cat flood false hash malloc ifdef cache port var Linus Torvalds. Daemon todo alloc new I'm compiling bar dereference memory leak crack stdio.h gnu fork highjack foo leapfrog daemon cookie. Socket ip gobble hello world system buffer ctl-c James T. Kirk segfault mountain dew client spoof loop true default wombat all your base are belong to us. Terminal overflow protected Donald Knuth float tcp big-endian. Public mutex firewall then gc null syn Trojan horse sudo machine code finally fail bin win kilo epoch regex stack trace wabbit fatal.`,
      in_packets: 0,
      month: 12,
      out_ip_bytes: 48,
      duration: 0,
      year: 2018,
      sensor_zone: 'default',
      src_port: 1105,
      uuid: 'd918540a-a152-40ab-a478-6b4cb836212d',
      conn_state: 'S0',
      in_ip_bytes: 0,
      extra: {},
      src_ips: [
        {
          city: null,
          isp: null,
          address: '192.168.242.179',
          latitude: null,
          org: null,
          asn: null
        },
        {
          city: 'Austin',
          isp: 'Unassigned',
          address: '192.168.242.179',
          latitude: 50,
          org: 'Unassigned',
          asn: 50
        },
        {
          city: 'New York',
          isp: 'Unassigned',
          address: '192.168.242.179',
          latitude: 0,
          org: 'Unassigned',
          nested: [1, 2, 3]
        }
      ],
      type: 'flow',
      src_mac: '00:0c:29:30:b9:68',
      dst_mac: '00:50:56:f0:a3:52',
      out_packets: 1,
      timestamp: 1544475648,
      source_type: 'bro',
      services: [],
      day: 10,
      out_bytes: 0,
      sensor_name: 'staging-alpha-network-sensor',
      hour: 21,
      detections: {},
      dst_port: 80,
      ip_proto: 'tcp',
      dst_ip: {
        city: null,
        isp: 'US Department of Defense Network',
        region: 'Unassigned',
        is_internal: false,
        longitude: -97.8219985961914,
        country_name: 'United States',
        version: 4,
        location: '',
        country_code: 'US',
        address: '6.6.6.167',
        latitude: 37.750999450683594,
        org: 'US Department of Defense Network',
        asn: 0
      },
      history: 'S',
      show_more: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23
      ]
    }}
  />
);

export const ShowAll = props => (
  <JsonTree
    {...props}
    data={{
      in_bytes: 0,
      sensor_id: 'staging-alpha-network-sensor',
      uid: 'a3731aac-5687-408a-8ed6-7693f360d491',
      description: `Haxx0r ipsum mailbomb while void ssh leet deadlock over clock mega frack ack. Rsa I'm sorry Dave, I'm afraid I can't do that fopen ban eof. Recursively irc less ascii case d00dz shell emacs cd foad script kiddies gcc unix rm -rf rsa linux grep throw Leslie Lamport snarf. Lib function xss man pages packet sniffer root for continue exception ddos headers *.* protocol chown injection Dennis Ritchie thread January 1, 1970. If hack the mainframe echo race condition packet giga gurfle semaphore long python mainframe server. Tera salt cat flood false hash malloc ifdef cache port var Linus Torvalds. Daemon todo alloc new I'm compiling bar dereference memory leak crack stdio.h gnu fork highjack foo leapfrog daemon cookie. Socket ip gobble hello world system buffer ctl-c James T. Kirk segfault mountain dew client spoof loop true default wombat all your base are belong to us. Terminal overflow protected Donald Knuth float tcp big-endian. Public mutex firewall then gc null syn Trojan horse sudo machine code finally fail bin win kilo epoch regex stack trace wabbit fatal.`,
      in_packets: 0,
      month: 12,
      out_ip_bytes: 48,
      duration: 0,
      year: 2018,
      sensor_zone: 'default',
      src_port: 1105,
      uuid: 'd918540a-a152-40ab-a478-6b4cb836212d',
      conn_state: 'S0',
      in_ip_bytes: 0,
      extra: {},
      src_ips: [
        {
          city: null,
          isp: null,
          address: '192.168.242.179',
          latitude: null,
          org: null,
          asn: null
        },
        {
          city: 'Austin',
          isp: 'Unassigned',
          address: '192.168.242.179',
          latitude: 50,
          org: 'Unassigned',
          asn: 50
        },
        {
          city: 'New York',
          isp: 'Unassigned',
          address: '192.168.242.179',
          latitude: 0,
          org: 'Unassigned',
          nested: [1, 2, 3]
        }
      ],
      type: 'flow',
      src_mac: '00:0c:29:30:b9:68',
      dst_mac: '00:50:56:f0:a3:52',
      out_packets: 1,
      timestamp: 1544475648,
      source_type: 'bro',
      services: [],
      day: 10,
      out_bytes: 0,
      sensor_name: 'staging-alpha-network-sensor',
      hour: 21,
      detections: {},
      dst_port: 80,
      ip_proto: 'tcp',
      dst_ip: {
        city: null,
        isp: 'US Department of Defense Network',
        region: 'Unassigned',
        is_internal: false,
        longitude: -97.8219985961914,
        country_name: 'United States',
        version: 4,
        location: '',
        country_code: 'US',
        address: '6.6.6.167',
        latitude: 37.750999450683594,
        org: 'US Department of Defense Network',
        asn: 0
      },
      history: 'S',
      show_more: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23
      ]
    }}
    expandDepth={Infinity}
    showAll
  />
);

export const Empties = props => (
  <JsonTree
    {...props}
    data={{
      in_ip_bytes: 0,
      extra: {},
      cheese: false,
      bacon: null,
      baconer: undefined,
      empty_string: '',
      arr: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        undefined,
        null,
        0,
        '',
        Infinity,
        NaN
      ]
    }}
    expandDepth={Infinity}
  />
);

export const NoRoot = props => (
  <JsonTree
    {...props}
    data={{
      name: 'John Doe',
      age: 30,
      over21: true,
      children: [
        { name: 'Jane Doe', age: 25 },
        { name: 'Jim Doe', age: 33 }
      ]
    }}
    root={false}
  />
);

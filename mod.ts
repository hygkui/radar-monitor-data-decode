import zlib from 'zlib';

const decodeMonitorData = (monitor_data: string): string | number [] => {
    console.log('解密雷达监测数据中，字节长度 :>> ', monitor_data.length);

    // base64 解码； 文件流 bigend 4
    const base64_str = Buffer.from(monitor_data, 'base64')

    const d1 = zlib.gunzipSync(base64_str)
    const floats: string | number [] = [];
    for (let i = 0; i < d1.length; i += 4) {
        floats.push(d1.readFloatBE(i));
    }

    return floats
}


export {
    decodeMonitorData
}
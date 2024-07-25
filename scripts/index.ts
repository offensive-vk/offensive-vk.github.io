/**
 * @author: Vedansh Khandelwal
 * @description: Private Development and Testing Website.
 * @copyright: Copyright (c) by Respected Authors. All rights reserved.
 * @year 2023
 * @lang JavaScript (ES6+), TypeScript
 */
class Methods {

    private static PRIVATE_KEY: number = 10859300155;
    private static PUBLIC_KEY: string = `0IF0VPIG842MP9VV`;
    private constructor() { }

    public async getIP(): Promise<string> {
        try {
            const res = await fetch('https://www.ifconfig.me/ip');
            const ip = await res.text();
            return ":: Your IP Address is : " + ip + " ::";
        } catch (error) {
            return ":: Error fetching IP address ::";
        }
    }

    public async showKeys(key?: [number, string]): Promise<void> {
        console.log(`\t [INFO] Your New Private Key : ${Methods.PRIVATE_KEY}\n`)
    }

    public async showPubKeysReset(key?: string | number | unknown): Promise<void> {
        console.log(`\t [INFO] Default Public Key : ${Methods.PUBLIC_KEY}\n`)
    }
}

async function updateIP() {
    const M = new Methods();
    const ipElement: HTMLElement | null = document.getElementById("getIP");

    if (ipElement) {
        try {
            const ip = await M.getIP();
            ipElement.innerHTML = ip;
        } catch (error) {
            console.error(error);
        }
    }
}

setTimeout(updateIP, 2500);
updateIP();
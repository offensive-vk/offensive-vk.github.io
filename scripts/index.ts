class Methods {
    constructor() { }

    public async getIP(): Promise<string> {
        try {
            const res = await fetch('https://www.ifconfig.me/ip');
            const ip = await res.text();
            return "[ Your IP Address is : " + ip + " ]";
        } catch (error) {
            return "[ Error fetching IP address ]";
        }
    }
}

async function updateIP() {
    const M = new Methods();
    const ipElement: HTMLHeadingElement | null = document.getElementById("getIP");

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
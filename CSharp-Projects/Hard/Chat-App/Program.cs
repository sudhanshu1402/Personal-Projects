using System;
using System.Net;
using System.Net.Sockets;

namespace ChatApp
{
    class Server
    {
        static void Main(string[] args)
        {
            TcpListener server = new TcpListener(IPAddress.Any, 8888);
            server.Start();
            Console.WriteLine("Chat Server Started...");
        }
    }
}

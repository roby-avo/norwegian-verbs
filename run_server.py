#!/usr/bin/env python3
"""
Simple HTTP server for the irregular verb app.

Usage:
    python3 run_server.py [PORT]

Run this script from the directory containing the `app` folder.  It will start
an HTTP server that serves files from the current working directory.  If you
omit the port argument, port 8000 is used by default.  Once the server is
running, open `http://localhost:PORT/app/index.html` in your browser on the
computer or any device on the same network.  On iOS you may need to use the
computer's IP address instead of `localhost`.
"""
import http.server
import socketserver
import sys


def main():
    # Determine the port to listen on
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Invalid port '{sys.argv[1]}', using default 8000.")
            port = 8000

    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Serving HTTP on port {port}.")
        print(f"Open http://localhost:{port}/app/index.html in your browser.")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
import argparse
import http
from http.server import HTTPServer, BaseHTTPRequestHandler


class HttpRequestHandlerOverride(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        f = open("response_example.json", "r")
        self.wfile.write( str.encode(f.read()))


def run():
    addr="localhost"
    port=8000
    handler_class=HttpRequestHandlerOverride
    server_class=HTTPServer
    server_address = (addr, port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting httpd server on {addr}:{port}")
    try:
        httpd.serve_forever()
    except:
        httpd.server_close()
        exit(1)


if __name__ == "__main__":
    run()
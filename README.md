# Pritam Das's Personal Website

This is the source code for my personal website. It is built using Jekyll and the [al-folio](https://alshedivat.github.io/al-folio/) theme ([al-folio's github](https://github.com/alshedivat/al-folio)).

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.

# Development

## To build locally

Using Docker to install Jekyll and Ruby dependencies is the easiest way.

You need to take the following steps to get al-folio up and running on your local machine:

- First, install docker and docker-compose.
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```shell
docker compose pull
docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. To see the template running, open your browser and go to http://localhost:8080. You should see a copy of the theme's demo website.

For more extensive steps on how to host the website, visit [al-folio's INSTALL.md](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md).

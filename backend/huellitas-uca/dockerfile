# Create war from spring boot project
FROM maven:3.6.3-jdk-8-slim AS build
WORKDIR /app
COPY pom.xml .
#RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package

# Create image from tomcat
FROM tomcat:8.5.51-jdk8-openjdk
COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/
EXPOSE 8080
CMD ["catalina.sh", "run"]

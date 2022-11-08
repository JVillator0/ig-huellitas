package com.uca.project.modelDTO;

import io.swagger.v3.core.util.Json;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PetImageDTO implements Serializable {
    String name;
    String type;
    String size;
    String base64;
    Json file;
}

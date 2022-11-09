package com.uca.project.modelDTO;

import io.swagger.v3.core.util.Json;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class PetImageDTO implements Serializable {
    String name;
    String type;
    String size;
    String base64;
}

package com.uca.project.modelDTO;

import io.swagger.v3.core.util.Json;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@ToString
public class PetImagesDTO implements Serializable {
    List<PetImageDTO> petImages;
}

package com.openclassrooms.mddapi.payload.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * Created by Jérémy MULET on 30/10/2023.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicResponse {

    private Long id;

    private String name;

    private String description;

}

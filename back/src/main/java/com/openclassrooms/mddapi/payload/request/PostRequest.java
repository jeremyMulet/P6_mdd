package com.openclassrooms.mddapi.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Jérémy MULET on 31/10/2023.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {

    private String title;

    private String content;

    private Long topicId;

    private Long userId;

}
